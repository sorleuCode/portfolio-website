import React from 'react'
import sunnySide from "../assets/sunnySide.png"
import locatorApp from "../assets/locatorApp.png"
import todoList from "../assets/todoList.png"

const portfolioData = [
    {
        id: 1,
        name: "locatorApp",
        image: locatorApp,
        demoUrl: "https://locator-app-wine.vercel.app/",
        codeUrl: "https://github.com/sorleuCode/locator-app"
    },

    {
        id: 2,
        name: "sunnySide",
        image: sunnySide,
        demoUrl: "https://sunnyside-landing-page-theta.vercel.app/",
        codeUrl: "https://github.com/sorleuCode/sunnyside-agency-landing-page-main"
    },
    {   
        id: 3,
        name: "todoList",
        image: todoList,
        demoUrl: "https://to-do-list-delta-sand.vercel.app/",
        codeUrl: "https://github.com/sorleuCode/To-do-List"
    }
]

const Portfolio = () => {
    return (
        <fieldset name='portfolio' className=' carousel-container aboutAnim mt-16 flex  justify-center flex-wrap p-5 rounded-md bg-gray-800 font text-md text-gray-300 ' >
            <legend className='color-white font-medium text-2xl'>Portfolio</legend>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {portfolioData.map(( data) => (
            <div key={data.id} className="shadow-md h-fit shadow-gray-600 rounded-lg">
              <img
                src={data.image}
                alt={data.name}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center text-center justify-center">
                <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target='_blank' href={data.demoUrl}>Demo</a>
                </div>
                <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target='_blank' href={data.codeUrl}>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </fieldset>
    )
}

export default Portfolio
