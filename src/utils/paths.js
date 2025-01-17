export const getImagePath = (path) => {
  const basePath = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;
  return path.startsWith('/') ? `${basePath}${path.slice(1)}` : `${basePath}${path}`;
}; 