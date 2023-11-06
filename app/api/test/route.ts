import { ChatCompletionMessage } from "openai/resources/index.mjs";

async function posthandler(req: Request) {
    // await fetch('http://httpbin.org/image');

    const min = 0;
    const max = 2;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    var content= responses[randomNum].content;
    // ?.slice(0, randomNum*100+randomNum*30+50);

    console.log("Returning test!")
    return new Response(JSON.stringify({ role: 'assistant', content: content }), { status: 200 });
}

export { posthandler as POST }

const json = {
    "aiRes": "you have hit the test api.. the water cycle. The water cycle is a continuous process that circulates water through the Earth's atmosphere and surface.\n\nThe water cycle begins with evaporation. This occurs when heat from the sun turns water from rivers, lakes, oceans, and other sources into water vapor. This water vapor rises into the atmosphere.\n\nAs water vapor rises, it cools and condenses into tiny droplets to form clouds. This process is called condensation. These clouds can be seen in the sky and are made up of billions of water droplets.\n\nNext, precipitation occurs. Precipitation is when the condensed water droplets in the clouds combine and become too heavy to stay in the atmosphere. This causes them to fall to the Earth's surface as rain, snow, sleet, or hail.\n\nOnce on the ground, the water from precipitation can take different paths. Some of the water may soak into the ground, becoming groundwater. This groundwater can then be absorbed by plants or stored in aquifers.\n\nOther water from precipitation flows over the surface as runoff. It collects into rivers, lakes, and eventually the ocean. This water can also be used by plants, animals, and humans for drinking, irrigation, and other purposes.\n\nAfter precipitation has occurred, the process starts again with evaporation. The cycle continues in a never-ending loop, constantly replenishing the Earth's water supply.\n\nThe water cycle is an essential process for maintaining life on Earth. It helps distribute fresh water across the planet and is responsible for weather patterns and the Earth's climate.\n\nUnderstanding the water cycle is important for a variety of reasons. It helps us to manage and conserve our water resources, predict weather patterns, and understand the impact of human activities on the environment.\n\nIn summary, the water cycle is a continuous process that involves evaporation, condensation, precipitation, and the movement of water on and below the Earth's surface. It is an essential process for the distribution and sustainability of water on our planet."
}

const json2= {
    "aiRes": "you have hit the test api.. the history of the Industrial Revolution. \n\nThe Industrial Revolution was a major turning point in human history that began in the late 18th century and continued into the 19th century. It marked a shift from predominantly agrarian societies to industrial and urban societies, with significant advancements in technology, manufacturing, and transportation.\n\nOne of the key factors that led to the Industrial Revolution was the invention of new machines and technologies. This included the steam engine, which revolutionized transportation and manufacturing processes. The steam engine allowed for the development of larger and more efficient factories, as well as the creation of steam-powered locomotives and ships.\n\nAnother important aspect of the Industrial Revolution was the shift from hand production methods to machine production. This was made possible by inventions such as the spinning jenny and the power loom, which revolutionized the textile industry. These machines could produce textiles at a much faster rate than hand weaving, leading to increased production and lower prices.\n\nThe Industrial Revolution also led to significant social and economic changes. The growth of industry and the rise of factories brought about a shift from rural areas to urban centers. This led to the development of cities and the expansion of the working class. However, working conditions in factories were often harsh, with long hours, low wages, and dangerous working conditions.\n\nThe Industrial Revolution also had a major impact on global trade and globalization. The development of steam-powered ships and railroads made it easier and faster to transport goods over long distances. This led to increased international trade and the expansion of colonial empires.\n\nOverall, the Industrial Revolution had a profound and lasting impact on society, transforming the way people lived and worked. It laid the foundation for modern technological advancements and shaped the world we live in today."
}

const json3 = {
    "aiRes": "the concept of supply and demand. Supply and demand is a fundamental concept in economics that explains how prices are determined in a market economy.\n\nSupply refers to the quantity of a good or service that producers are willing and able to sell at a given price. It is represented by the upward-sloping supply curve. The law of supply states that as the price of a good or service increases, producers are willing to supply more of it, and vice versa.\n\nDemand, on the other hand, refers to the quantity of a good or service that consumers are willing and able to buy at a given price. It is represented by the downward-sloping demand curve. The law of demand states that as the price of a good or service increases, consumers are willing to buy less of it, and vice versa.\n\nThe intersection of the supply and demand curves determines the equilibrium price and quantity in a market. At this equilibrium point, the quantity supplied equals the quantity demanded, and there is no shortage or surplus of the good or service.\n\nFactors that can shift the supply curve include changes in production costs, technology, taxes, and subsidies. For example, if the cost of raw materials used in production increases, producers may supply less of the good at any given price, shifting the supply curve to the left.\n\nFactors that can shift the demand curve include changes in consumer income, tastes and preferences, population, and government policies. For example, if there is an increase in consumer income, consumers may demand more of a normal good at any given price, shifting the demand curve to the right.\n\nChanges in supply and demand can cause changes in price and quantity. If there is an increase in demand and no change in supply, there will be a shortage of the good, leading to an increase in price and quantity. Conversely, if there is a decrease in demand and no change in supply, there will be a surplus of the good, leading to a decrease in price and quantity.\n\nUnderstanding the concept of supply and demand is crucial for businesses and policymakers as it helps them make decisions about pricing, production levels, and market interventions. It also provides insights into market dynamics and helps predict and explain changes in prices and quantities in different markets."
}

const responses: ChatCompletionMessage[]=[
    {
        role: "assistant", content: json.aiRes
    },
    {
        role: "assistant", content: json2.aiRes
    },
    {
        role: "assistant", content: json3.aiRes
    },
]