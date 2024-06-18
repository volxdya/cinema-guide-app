import './Thrailer.css';

export function Trailer() {
    return (
        <div className="d-flex justify-content-center">
            <video width="1600" height="500" controls>
                <source
                    src="https://hw5.cdn.asset.aparat.com/aparat-video/09b40b525d19c2459557117619da2c7f12978678-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjlkNTQwYTJiMmNkZDAzMDFjODNlNjIxNjlmOWVjY2ZkIiwiZXhwIjoxNjM5MDkyNTY4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.PTLqt9ltqbosdJr27icnfc_4PhUG4oVX2_IPxVXdqro"
                    type="video/mp4"/>
            </video>
        </div>

    );
}
