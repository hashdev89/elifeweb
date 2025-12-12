import Image from "next/image";

type ButtonProps ={
    type: 'button' | 'submit' | 'link';
    title: string;
    icon?: string;
    variant: 'btn_light';
  
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
    className={'flexCenter gap3 rounded-sm $varaint cursor-pointer'}
        type={"button"} 
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap text-secondry-100 cursor-pointer">{title}</label>
    </button>

  )
}

export default Button