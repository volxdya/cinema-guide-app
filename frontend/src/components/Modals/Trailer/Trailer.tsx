import './Thrailer.css';

export function Trailer() {
    return (
        <div className="d-flex justify-content-center">
            <video
                src='https://ik.imagekit.io/ikmedia/example_video.mp4'
                width='100%'
                height='710'
                controls
                loop
                autoPlay
            />
        </div>

    );
}
