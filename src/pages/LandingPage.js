import head from './../assets/icons/head.png';
import {useNavigate} from 'react-router-dom';
function LandingPage()
{
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details")
    };
return( 
    <div className="text-center">
        <p className="text-2xl font-mono font-bold uppercase">About me</p>
        <div className="flex justify-center">
        <img src={head} 
        ald="head"width={80} 
        className="w-[20%] my-3 bg-white rounded-full p-6"></img>
        </div>
        <p className="text-md mt-2 font-blod text-white mx-8 md:mx-36"> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        {"\n"}
        </p>
        <br />
        <p>RatchaNon Binkasem.......................................</p>
        <br />
        <button className="text-xl text-[#f5f5dc] underline" onClick={() => handleToDetail()}> 
        NEXT 
        </button>
    
    </div>
    
    );
}

export default LandingPage;