const PhotoAttribution = ({ author, url }: { author: string; url: string }) => {
  return (
    <p className="mt-3 text-xs text-white/70">
      Photo by{" "}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 hover:text-white"
      >
        {author}
      </a>
    </p>
  );
};

export default PhotoAttribution;
