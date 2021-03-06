const CreateButton = ({
  name,
  img,
  url,
  description,
  code,
  label = "Basic",
  button = "Create",
}) => (
  <div className="inline-block p-4 text-base" style={{ width: "20rem" }}>
    <div className="relative flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl card">
      <div className="absolute inset-x-0 top-0 pt-1 pr-4 text-right text-blue-400">
        {label}
      </div>
      <div className="prod-title">
        <p className="text-2xl font-bold text-gray-900 truncate">{name}</p>
        <p className="text-base text-gray-400 ">{description}</p>
      </div>
      <div className="my-2 prod-img">
        <img src={img} className="h-40 p-4 mx-auto" />
      </div>
      {/* <div className="grid gap-10 prod-info"> */}
      {/* <div>
          <ul className="flex flex-row items-center justify-center">
            <li className="mr-4 last:mr-0">
              <span className="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
                <a
                  href="#blue"
                  className="block w-6 h-6 bg-blue-900 rounded-full"
                ></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                <a
                  href="#yellow"
                  className="block w-6 h-6 bg-yellow-500 rounded-full"
                ></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                <a
                  href="#red"
                  className="block w-6 h-6 bg-red-500 rounded-full"
                ></a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
                <a
                  href="#green"
                  className="block w-6 h-6 bg-green-500 rounded-full"
                ></a>
              </span>
            </li>
          </ul>
        </div> */}
      <a
        onClick={code}
        href={url}
        target="_blank"
        className="px-6 py-2 text-center uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full cursor-pointer hover:bg-gray-800 hover:text-white focus:outline-none"
      >
        {button}
      </a>
      {/* </div> */}
    </div>
  </div>
);

export default CreateButton;
