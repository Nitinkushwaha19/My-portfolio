import './Loader.css';
export default function Loader({value}) {
    return (
     <div className="progress-loading-bar">
      <progress id='loader' max={100} value={value} ></progress>
     </div>
    );
  }
  