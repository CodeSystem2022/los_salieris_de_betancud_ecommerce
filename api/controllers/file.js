import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getProductImage = (req, res) => {
  if (!req.params.name) {
    return res.status(404).json({ message: 'File not found.' });
  }
  const urlFile = path.join(__dirname, '../media', req.path);
  res.sendFile(urlFile);
};