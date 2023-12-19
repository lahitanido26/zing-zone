const TabHeader = () => {
  return (
    <div className="w-full bg-white">
      <ul className="flex justify-evenly  border-b border-gray-200 text-[#333333]">
        <li>
          <a
            href="#home"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#buy"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Buy
          </a>
        </li>
        <li>
          <a
            href="#rent"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Rent
          </a>
        </li>
        <li>
          <a
            href="#commercial"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Commercial
          </a>
        </li>
        <li>
          <a
            href="#agents"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Agents
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TabHeader
