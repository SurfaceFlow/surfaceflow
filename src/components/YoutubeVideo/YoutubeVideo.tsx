import './videoyoutube.scss'

const YoutubeVideo = (): JSX.Element => {
    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/2Yr6DvVRe-I`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video youtube"
            />
        </div>
    );
};

export default YoutubeVideo