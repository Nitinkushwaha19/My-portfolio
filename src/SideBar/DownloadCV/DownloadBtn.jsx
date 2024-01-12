import "./DownloadBtn.css";
import cvv from './NitinKushwaha.pdf';

export default function DownloadCv () {
    return (
        <div className="download">
            <a href={cvv} download="Nitin's resume">DOWNLOAD CV
            <i className="fa-solid fa-file-arrow-down"></i>
            </a>
        </div>
    );

}