import image1 from "../../../public/images/r&d/research-1.png"
import image2 from "../../../public/images/r&d/research-2.png"
import image3 from "../../../public/images/r&d/research-3.png"

const MultipleImageWithSingleDescription = () =>{
    return(
        <div id="MultipleImageWithSingleDescription" className="marginTop">
            <div className="containar">
                <div className="grid grid-rows-2 grid-cols-3 gap-4">
                    <div className="row-span-1 col-span-1">
                        <img src={image1.src} alt="" className="h-full"/>
                    </div>
                    <div className="row-span-1 col-span-2">
                        <img src={image2.src} alt=""/>
                    </div>
                    <div className="row-span-2 col-span-3">
                        <img src={image3.src} alt=""/>
                    </div>
                </div>

                <div className="pt-10">
                    <h3>Tilapia hatchery and cohort breeding (2005)</h3>
                    <br/>
                    <p>
                        R&D activities conducted on tilapia (Oreochromis niloticus) have been very important.
                        The experiments were carried out on two lines: extension of the breeding season through
                        manipulation of
                        temperature and fecundity through improving the brood fish rearing process. Season optimisation
                        was
                        obtained through achieving early and late maturity of tilapia corresponding with the seasonal
                        water
                        temperature in the hatchery.
                        <br/>
                        The pond and the surroundings of the hatchery were covered with polythene sheet,
                        and an electric heater was to increase water temperature during winter. Also,
                        open breeding of tilapia instead in hapas was conducted during warmer weather,
                        and the sex ratio of broods was optimised for effective breeding. These experiments
                        significantly helped to
                        increase the performance of BRACs tilapia hatcheries.
                        <br/>
                        BRAC was the pioneer organisation in undertaking cohort breeding for genetic improvement of
                        tilapia in
                        its Magura hatchery in 2005.The monosex male production from larvae produced under cohort
                        breeding is
                        now the most significant programme for tilapia seed production in the country.
                        <br/>
                        There is a new tilapia gene bank in 2022 maintaining in the Magura hatchery name BRAC Tilapia 2.
                        These updated tilapia variety is 30% faster growth from the other species. This tilapia is
                        brought
                        from the source AIT Thailand.
                    </p>

                    <br/>
                    <br/>
                    <br/>

                    <h3>Cage aquaculture (2006-07)</h3>
                    <br/>
                    <p>
                        During 2006-07, cage culture of tilapia in the Dakatia River, Chandpur, was initiated in
                        collaboration with the DoF to provide an alternative livelihood for fishers catching hilsa in the Meghna River,
                        to reduce fishing pressure, and to conserve the natural resources of the Meghna River, especially during
                        the banned period of Hilsa fishing.
                    </p>

                    <br/>
                    <br/>
                    <br/>

                    <h3>Sea bass induced breeding (2000-08)</h3>
                    <br/>
                    <p>
                        The sea bass (Lates calcarifer) was considered to be the species with the most potential to be brought under aquaculture,
                        and efforts for aquaculture development were deemed necessary. With this in view, induced sea bass breeding experiments
                        were conducted in Teknaf, Cox’s Bazar, during 2000-08. Gonadal development in
                        the broods could not be achieved; thus, the programme was discontinued.
                    </p>

                    <br/>
                    <br/>
                    <br/>

                    <h3>Culture in the flow-through system in tank</h3>
                    <br/>
                    <p>
                        In another R&D effort, tilapia, koi, and shing production was tried in the flow-through system to reduce the space required,
                        but with intensification of the system. However, while the production of tilapia and Koi in the system was satisfactory,
                        there was high mortality for shing.
                    </p>

                    <br/>
                    <br/>
                    <br/>

                    <h3>Prawn brood development in captivity (2006-08)</h3>
                    <br/>
                    <p>
                        The development of prawn brood stock in captivity was experimented with, and berried prawn was produced in the trial.
                        However, PL production from the system was not successful.
                    </p>

                    <br/>
                    <br/>
                    <br/>

                    <h3>Effectiveness of probiotics in hatchery and culture (2016-22)</h3>
                    <br/>
                    <p>
                        The uses of probiotics in hatchery and fish culture are carried out different location with different shrimps and fish species
                        though out the time period. The use of probiotics is remarkable output on the cat fish spawn and fingerling.
                        The result is not found effective on the prawn, tilapia and carp culture production.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default MultipleImageWithSingleDescription;