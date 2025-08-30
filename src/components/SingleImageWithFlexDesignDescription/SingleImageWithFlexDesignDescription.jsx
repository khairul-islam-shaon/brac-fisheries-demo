import image4 from "../../../public/images/r&d/research-4.png"
import Header from "@/components/ui/Header";
const SingleImageWithFlexDesignDescription = () =>{
    const projects = [
        {
            title: "Vannamei Shrimp Hatchery",
            description: "The white shrimp vannamei culture recently approved from the Department of Fisheries in Bangladesh. BRAC Fisheries is working on the set up vannamei hatchery in Bangladesh. The technical support and brood of vannamei will bring with collaboration of Hawaii, USA."
        },
        {
            title: "Adopting And Maturation Of Sea Bass Fish In Fresh/Brakish Water Using Local And Live Feeds",
            description: "The sea bass adoption procedure is running under Noakhali hatchery again with the help of previous mistake and updated inputs."
        },
        {
            title: "Late Season Tilapia Breeding Controlling Temperature With Vegetation Shed",
            description: "Production of late season Tilapia Fry with controlling temperature and other parameter using aquatic shed. This research and development project carried out on the Sreemangal Hatchery."
        },
        {
            title: "Biofloc Fish Culture",
            description: "Production and growth analysis Pabda and Magur for developing Biofloc aquaculture."
        },
        {
            title: "Pearl Culture",
            description: "Survivability and performance check of oysters with effective production of ornamental pearl. Now the pearl culture R&D is carried out in Magura, This project is running with minimization of prior mistakes."
        },
        {
            title: "Tilapia Fry And Cat Fish Fingerling Growth Analysis",
            description: "Improving early season growth performance of Tilapia fry and cat fish fingerling with fortified feed and aqua medicine."
        }
    ];

    return(
        <div id="SingleImageWithFlexDesignDescription" className="marginTop">
           <img src={image4.src} alt=""/>
            <div className="containar marginTop">
                <Header>Running Research and Development activities</Header>

                <div className="pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="p-4 flex flex-col">
                                <div className="flex-1 flex flex-col">
                                    <h2 className="text-lg font-bold mb-2 xl:h-[55px] md:h-[85px]">{project.title}</h2>
                                    <p className="flex-1">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleImageWithFlexDesignDescription;