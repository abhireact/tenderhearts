function Card(props) {
  return (
    <div className="mx-2 bg-white flex flex-col justify-between border rounded hover:shadow-primary-400 group">
      <a className="relative" href="/tool/writey-ai">
        <div className="relative w-full aspect-video">
          <img
            className="rounded w-full h-full object-cover"
            src={props.imageUrl}
            alt="Writey A.I"
            loading="lazy"
          />
          <div className="block group-hover:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-blue-700 to-blue-400 text-white">
            <h2 className="text-xl font-semibold">{props.title}</h2>
          </div>
        </div>
      </a>
      <div className="hidden group-hover:block px-4 py-2">
        <p className="text-gray-600 line-clamp-3">{props.description}</p>
        <p>
          <small className="text-neutral-500 dark:text-neutral-400">
            <a className="text-indigo-500 inline-flex items-center">
             Learn More
              
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}
export default Card;
