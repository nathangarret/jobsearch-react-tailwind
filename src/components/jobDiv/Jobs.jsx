import React from 'react';

import message from '../../assets/message.png';
import apple from '../../assets/apple.png';
import spotify from '../../assets/spotify.png';
import google from '../../assets/google.png';
import netflix from '../../assets/netflix.png';

import { BiTimeFive } from 'react-icons/bi';

const Data = [
    {
        id: 1,
        image: message,
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Novac Linus Co."
    },
    {
        id: 2,
        image: apple,
        title: 'Software Developer',
        time: 'Now',
        location: 'EUA',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Apple"
    },
    {
        id: 3,
        image: spotify,
        title: 'Software Engginer',
        time: 'Now',
        location: 'Suécia',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Spotify"
    },
    {
        id: 4,
        image: google,
        title: 'IT Solutions',
        time: 'Now',
        location: 'London',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Spotify"
    },
    {
        id: 5,
        image: netflix,
        title: 'Cloud Infra',
        time: 'Now',
        location: 'New Zeland',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Netflix"
    },
    {
        id: 7,
        image: apple,
        title: 'Software Developer',
        time: 'Now',
        location: 'EUA',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Apple"
    },
    {
        id: 6,
        image: message,
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Novac Linus Co."
    },
    {
        id: 8,
        image: spotify,
        title: 'Software Engginer',
        time: 'Now',
        location: 'Suécia',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Spotify"
    },
    {
        id: 3,
        image: spotify,
        title: 'Software Engginer',
        time: 'Now',
        location: 'Suécia',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Spotify"
    },
    {
        id: 4,
        image: google,
        title: 'IT Solutions',
        time: 'Now',
        location: 'London',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?",
        company: "Spotify"
    }
]

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({ id, image, time, title, location, desc, company }) => {
                        return (
                            <div key={id} className="group group/item sigleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                                <span className="flex justify-between items-center gap-4 cursor-pointer">
                                    <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                                    <span className="flex items-center text-[#ccc] gap-1">
                                        <BiTimeFive /> {time}
                                    </span>
                                </span>
                                <h6 className="text-[#ccc]">{location}</h6>
                                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                                    {desc}
                                </p>
                                <div className="company flex items-center gap-2">
                                    <img src={image} alt="Company Logo" className='w-[20%]' />
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                                </div>

                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                                    Apply Now
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Jobs;