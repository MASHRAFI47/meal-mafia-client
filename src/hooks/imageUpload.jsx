import axios from "axios";

const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Img_Upload_Api_Key}`, formData);
    return data.data.display_url;
}

export default imageUpload