const CreateButton = ({ name, img, url, description }) => (
  <div class="container p-4" style={{ width: "20rem" }}>
    <div class="card flex flex-col justify-center p-6 bg-white rounded-lg shadow-2xl">
      <div class="prod-title">
        <p class="text-2xl text-gray-900 font-bold">{name}</p>
        <p class=" text-sm text-gray-400">{description}</p>
      </div>
      <div class="prod-img my-2">
        <img src={img} class="mx-auto p-4" style={{ minHeight: "160px" }} />
      </div>
      {/* <div class="prod-info grid gap-10"> */}
      {/* <div>
          <ul class="flex flex-row justify-center items-center">
            <li class="mr-4 last:mr-0">
              <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                <a
                  href="#blue"
                  class="block w-6 h-6 bg-blue-900 rounded-full"
                ></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a
                  href="#yellow"
                  class="block w-6 h-6 bg-yellow-500 rounded-full"
                ></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a
                  href="#red"
                  class="block w-6 h-6 bg-red-500 rounded-full"
                ></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a
                  href="#green"
                  class="block w-6 h-6 bg-green-500 rounded-full"
                ></a>
              </span>
            </li>
          </ul>
        </div> */}
      <a
        href={url}
        target="_blank"
        class="text-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
      >
        Create
      </a>
      {/* </div> */}
    </div>
  </div>
);

export default CreateButton;
