import { useState } from "react";
import Gallery from "../components/Gallery";
import { MultiSelect } from "react-multi-select-component";
import dataSkills from "../utils/skills.json";
import axios from "axios";

export const Publish = ({ userToken }) => {
  const [cover, setCover] = useState(null);
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState({
    github: "",
    netlify: "",
  });
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [slider, setSlider] = useState([]);
  //
  const [selected, setSelected] = useState([]);

  const handleCover = (event) => {
    setCover(event.target.files[0]);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSource = (event) => {
    setSource({
      ...source,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cover", cover);
    formData.append("title", title);
    formData.append("color", color);
    formData.append("description", description);

    const tabSkills = Object.values(skills);
    const tabSlider = Object.values(selected);
    const tabSource = Object.values(source);

    if (tabSkills.length > 0) {
      for (let c = 0; c < tabSkills.length; c++) {
        console.log(`check ${c}`, JSON.stringify(tabSkills[c]));
        formData.append(`check ${c}`, JSON.stringify(tabSkills[c]));
      }
    }
    if (tabSlider.length > 0) {
      for (let i = 0; i < tabSlider.length; i++) {
        console.log(`slide ${i}`, JSON.stringify(tabSlider[i]));
        formData.append(`slide ${i}`, JSON.stringify(tabSlider[i]));
      }
    }

    if (tabSource.length > 0) {
      for (let s = 0; s < tabSource.length; s++) {
        console.log(JSON.stringify(tabSource[s]));
        formData.append(`source ${s}`, tabSource[s]);
      }
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URI_BACK}/works/publish`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      window.location.reload(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="relative flex flex-row">
        <Gallery slider={slider} setSlider={setSlider} />
        <div className="relative p-6 h-full">
          <form className="w-screen max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block text-sm font-medium text-gray-700">
                  Sélectionner une image de couverture
                </label>
                {cover && (
                  <div className="py-6">
                    <img
                      src={URL.createObjectURL(cover)}
                      className="object-cover"
                      alt="file-upload"
                    />
                  </div>
                )}
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="cover"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="cover"
                          type="file"
                          className="sr-only"
                          onChange={handleCover}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:bg-white  focus:border-blue-200 border border-gray-300"
                  id="color"
                  type="text"
                  placeholder="Color Hex"
                  value={color}
                  maxLength={7}
                  onChange={(e) => setColor(e.target.value)}
                  required={true}
                />
                {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:bg-white  focus:border-blue-200 border border-gray-300"
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitle}
                  required={true}
                />
                {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:bg-white  focus:border-blue-200 border border-gray-300"
                  id="sourceGithub"
                  type="text"
                  name="github"
                  placeholder="Lien Github"
                  value={source.github}
                  onChange={handleSource}
                />
                {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:bg-white  focus:border-blue-200 border border-gray-300"
                  id="sourceNetlify"
                  type="text"
                  name="netlify"
                  placeholder="Lien Netlify"
                  value={source.netlify}
                  onChange={handleSource}
                  required={true}
                />
                {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="appearance-none block w-full text-gray-700 rounded py-2 px-4 leading-tight
                  focus:bg-white focus:border-blue-200 border border-gray-300"
                  id="description"
                  rows={3}
                  cols={6}
                  placeholder="Description"
                  value={description}
                  required={true}
                  onChange={handleDescription}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Selectionner des compétences
                </label>
                <MultiSelect
                  options={dataSkills}
                  value={skills}
                  onChange={setSkills}
                  labelledBy="Select a skill"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="slider"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Selectionner des images
                </label>
                <MultiSelect
                  options={slider}
                  labelledBy="Select images"
                  value={selected}
                  onChange={setSelected}
                />
              </div>
            </div>
            <div className="px-4 py-3 text-center sm:px-6">
              <input
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                value="Envoyer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
