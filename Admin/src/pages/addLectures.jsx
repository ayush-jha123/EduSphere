import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";

const addLectures = () => {
  const { id } = useParams();
  console.log(id);
  const [lectures, setLectures] = useState([]);
  const [video, setVedio] = useState();
  const [img, setImg] = useState();
  const [videoPer, setVedioPer] = useState(0);
  const [imgPer, setImagePer] = useState(0);
  const [inputs, setInputs] = useState({});

  const fetchAllLectures = async () => {
    const response = await axios.get(
      `http://localhost:5000/course/getLecCourse/${id}`
    );
    if (response?.status === 200) {
      setLectures(response?.data);
    }
  };

  useEffect(() => {
    fetchAllLectures();
  }, []);

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "imgUrl" ? "images/" : "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl"
          ? setImagePer(Math.round(progress))
          : setVedioPer(Math.round(progress));
      },
      (error) => {
        console.log(error);
      },
      () => {
        //uploaded successfully
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadedURL -", downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  };

  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/course/lecUpload/${id}`,
        { ...inputs }
      );
      if (response.status === 200) {
        fetchAllLectures();
        alert("Lectures Uploaded successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete=async (lecId)=>{
    try {
      await axios.delete(`http://localhost:5000/course/lecdelete/${id}/${lecId}`);
      alert('Lectures Deleted Successfully');
      fetchAllLectures();
    } catch (error) {
      console.log(lectures);
    }
  }

  console.log(lectures);
  return (
    <div className="flex flex-col">
      <div className="bg-white p-2 m-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="video"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Lectures Title"
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="Video"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Video:
            </label>
            {videoPer > 0 && videoPer < 100 ? (
              <span className="text-slate-700">{`uploading:${videoPer} %`}</span>
            ) : videoPer === 100 ? (
              <span className="text-green-700">
                Video uploaded successfully
              </span>
            ) : (
              ""
            )}
            <input
              type="file"
              name="Video"
              accept="video/*"
              id="video"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setVedio((prev) => e.target.files[0])}
            />
          </div>
          <br />
          <div>
            <label
              htmlFor="img"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image:
            </label>
            {imgPer > 0 && imgPer < 100 ? (
              <span className="text-slate-700">{`uploading:${imgPer} %`}</span>
            ) : imgPer === 100 ? (
              <span className="text-green-700">
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
            <input
              type="file"
              name="Image"
              accept="image/*"
              id="img"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setImg((prev) => e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 p-2 px-6 rounded-lg font-semibold text-md hover:bg-blue-600 text-center w-full mt-3"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="p-4 ring-1 m-3 rounded-md">
        <p className="font-semibold text-lg">Lectures</p>
        <div className="w-full m-2 p-2 flex flex-col  space-y-2 rounded-md">
          {lectures &&
            lectures.map((lecture) => (
              <div className="bg-white flex flex-row mt-3 p-2 justify-between">
                <div className="flex flex-row">
                  <img
                    src={lecture?.frontPhoto}
                    alt="frontPhoto"
                    className=" rounded-md w-[12rem] h-[6rem] ring-1 mr-2"
                  />
                  <p className="font-semibold font-serif">{lecture?.title}</p>
                </div>
                <div className="flex items-center">
                <button type="button" className="bg-slate-100 ring-2 p-3 rounded-lg hover:bg-red-600 hover:text-white w-[6rem]" onClick={()=>handledelete(lecture?._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default addLectures;
