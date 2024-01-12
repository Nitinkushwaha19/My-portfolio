import "./DownloadBtn.css";
import cvv from './Cvv.pdf';

export default function DownloadCv () {
    return (
        <div className="download">
            <a href={cvv} download="cvv">DOWNLOAD CV
            <i className="fa-solid fa-file-arrow-down"></i>
            </a>
        </div>
    );

}