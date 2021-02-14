import React from "react"
import Navbar from "../../components/Navbar"
import {DropdownMenuProgrammation, films} from "../../constants"
import Film from "../../components/Film"

const Programmation: React.FC = () => (
    <div>
        <Navbar/>
        <div className="flex flex-col z-10 text-my-indigo pl-0 lg:pl-24">
            <div
                className="text-left text-2xl sm:text-5xl uppercase font-bold w-full xl:w-1/2"
                id={DropdownMenuProgrammation.films}>
                {DropdownMenuProgrammation.films}
            </div>
            <div
                className="mt-8 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col sm:flex-row-reverse mx-auto justify-evenly flex-wrap lg:w-4/5 xl:w-3/5 ">
                {
                    films.map((film, i) => (
                        <Film key={i} filmName={film.filmName} author={film.author}
                            description={film.description} date={film.date}
                            location={film.location} duration={film.duration}
                            imgThumbnail={film.imgThumbnail} imgExtended={film.imgExtended}/>
                    ))
                }
            </div>
            <div
                className="text-left text-2xl sm:text-5xl uppercase font-bold w-full xl:w-1/2 my-52"
                id={DropdownMenuProgrammation.musique}>
                {DropdownMenuProgrammation.musique}
            </div>
            <div
                className="text-left text-2xl sm:text-5xl uppercase font-bold w-full xl:w-1/2 my-52"
                id={DropdownMenuProgrammation.concours}>
                {DropdownMenuProgrammation.concours}
            </div>
        </div>
    </div>
)

export default Programmation