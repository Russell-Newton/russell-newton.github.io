type GetFileContentOptions = {
  user: string,
  repo: string,
  pathToDirectory: string,
  fileName: string
}

const getFileBlob = async (options: GetFileContentOptions, fileSHA: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${options.user}/${options.repo}/git/blobs/${fileSHA}`
    );
    const data = await response.json();

    let fileBlob = data.content
    return await convertBlob(fileBlob)
  } catch (error) {
    console.log(error);
    return null;
  }
}

const convertBlob = async (blob: string) => {
  try {
    return base64EncodeUnicode(blob)
  } catch (error) {
    console.log(error)
    return null;
  }
}

function base64EncodeUnicode(str: string) {
  let utf8Bytes = decodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode(p1);
  });

  return atob(utf8Bytes);
}

export default async function getRawGithubFileContent(options: GetFileContentOptions) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${options.user}/${options.repo}/contents/${options.pathToDirectory}`
    );
    const data = await response.json();

    for (let f of data) {
      if (f.name === options.fileName) {
        return await getFileBlob(options, f.sha)
      }
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
