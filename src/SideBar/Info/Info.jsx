import Details from "./Details";

export default function Info() {
    return (
        <>
            <div>
                <Details details={"Residence"} value={"Maharastra,India"}/>
                <Details details={"City"} value={"Nagpur"}/>
                <Details details={"Mobile Number"} value={9693429005}/>
                <Details details={"Age"} value={20}/>
            </div>
        </>
    );
}