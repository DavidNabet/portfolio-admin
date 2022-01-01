import { useState } from "react";

const List = ({}) => {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="flex flex-col flex-wrap p-6 mx-auto">
      <h2 className="mb-1">Travaux dans la bdd</h2>
      <ul className="flex flex-col">
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/images/person/6.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium">Jean Marc</div>
              <div className="text-gray-600 text-sm">Developer</div>
            </div>
            <div className="text-gray-600 text-xs">6:00 AM</div>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/images/person/10.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium">Designer</div>
              <div className="text-gray-600 text-sm">Charlie Moi</div>
            </div>
            <div className="text-gray-600 text-xs">6:00 AM</div>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/images/person/3.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium ">CEO</div>
              <div className="text-gray-600  text-sm">Marine Jeanne</div>
            </div>
            <div className="text-gray-600  text-xs">6:00 AM</div>
          </div>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/images/person/7.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium ">CTO</div>
              <div className="text-gray-600  text-sm">Boby PArk</div>
            </div>
            <div className="text-gray-600  text-xs">6:00 AM</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
