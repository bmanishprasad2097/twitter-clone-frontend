type customButtonType = {
    logo : JSX.Element
    title : string
  }
  
  export default function ButtonCustom(props : customButtonType){
    return (
      <div className="  text-[#f7f3f3] pb-4">
        <button className="hover:bg-[#212324] text-center gap-4 text-[20px] pl-5 pr-5 hover:text-white transition-colors duration-300 pt-5 pb-5 rounded-cm w-fit h-[40px] flex items-center space-x-4"><span className="text-2xl">{props.logo}</span> {props.title}</button>
      </div>
    )
  }
  