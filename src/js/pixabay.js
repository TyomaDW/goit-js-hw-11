import axios from 'axios';

export async function getImages(name, page, per_page) {
  const searchParams = {
    params: {
      key: '24355682-9ff8d18cf689b459b447658d3',
      q: `${name}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  };

  const response = await axios.get('https://pixabay.com/api/', searchParams);
  return response.data;
}
