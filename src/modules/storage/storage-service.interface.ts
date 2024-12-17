export interface StorageService {
  uploadFile(file: any): Promise<string>;
  deleteFile(fileUrl: string): Promise<void>;
}
