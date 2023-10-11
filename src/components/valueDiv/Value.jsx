import React from 'react';

import Logo from '../../assets/logotipo.png';
import LogoRedux from '../../assets/redux.png';
import LogoMonzo from '../../assets/monzo.png';

const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The Value that holds us true and to account</h1>
            <div className='grid gap-[10rem] grid-cols-3 items-center'>
                <div className="singleGrid rounded-[20px] hover:bg-[#eeedf7] p-[2.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[1px] rounded-[.8rem] bg-inherit-[#dedef8] h-[65px] w-[65px] flex items-center justify-center">
                            <img src={Logo} className="w-[70%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur assumenda laborum quisquam at quaerat?
                    </p>
                </div>
                <div className="singleGrid rounded-[20px] hover:bg-[#eeedf7] p-[2.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[65px] w-[65px] flex items-center justify-center">
                            <img src={LogoRedux} className="w-[70%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Redux
                        </span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur assumenda laborum quisquam at quaerat?
                    </p>
                </div>
                <div className="singleGrid rounded-[20px] hover:bg-[#eeedf7] p-[2.5rem]">
                    <div className='flex items-center gap-3'>
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[65px] w-[65px] flex items-center justify-center">
                            <img src={LogoMonzo} className="w-[70%]" />
                        </div>
                        <span className="font-semibold text-textColor text-[18px]">
                            Monzo
                        </span>
                    </div>
                    <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur assumenda laborum quisquam at quaerat?
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Value;