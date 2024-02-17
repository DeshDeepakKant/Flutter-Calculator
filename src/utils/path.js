export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/React-D3-VizHub-Interactive-Data-Insights' 
    : '';
  return `${basePath}${path}`;
};

export const getPagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/React-D3-VizHub-Interactive-Data-Insights' 
    : '';
  return `${basePath}${path}`;
};
