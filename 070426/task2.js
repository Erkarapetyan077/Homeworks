class StorageProvider {
  upload(file) {
    throw new Error("Method not implemented");
  }

  download(filename) {
    throw new Error("Method not implemented");
  }
}

class LocalStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`Uploading ${file} to local storage`);
  }

  download(filename) {
    console.log(`Downloading ${filename} from local storage`);
  }
}

class CloudStorageProvider extends StorageProvider {
  upload(file) {
    console.log(`Uploading ${file} to local storage`);
  }

  download(filename) {
    console.log(`Downloading ${filename} from local storage`);
  }
}

function useStorage(provider) {
  if (
    typeof provider.upload !== "function" &&
    typeof provider.download !== "function"
  ) {
    throw new Error("Invalid storage provider");
  }

  provider.upload("file.txt");
  provider.download("file.txt");
}

useStorage(new LocalStorageProvider());
// Works

useStorage({});
// Error: Invalid storage provider
