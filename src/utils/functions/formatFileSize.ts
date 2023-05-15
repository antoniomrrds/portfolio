export function formatFileSize(sizeInBytes: number): string {
  const kiloByte = 1024;
  const megaByte = kiloByte * 1024;
  const gigaByte = megaByte * 1024;

  if (sizeInBytes >= gigaByte) {
    return `${(sizeInBytes / gigaByte).toFixed(2)} GB`;
  } else if (sizeInBytes >= megaByte) {
    return `${(sizeInBytes / megaByte).toFixed(2)} MB`;
  } else if (sizeInBytes >= kiloByte) {
    return `${(sizeInBytes / kiloByte).toFixed(2)} KB`;
  } else {
    return `${sizeInBytes} bytes`;
  }
}
