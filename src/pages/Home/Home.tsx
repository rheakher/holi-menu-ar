import {Button, Card, CardFooter, Image} from "@nextui-org/react";
import ar from "../../assets/ar.png"
import wifi from "../../assets/wifi.png"
import menu from "../../assets/menu.png"
import about from "../../assets/about.png"

function Home() {
    return <>
        <div className="m-8 border-solid border-8 border-white content-center">
            <div className="text-4xl font-bold p-6 text-center text-[#ff918c]">
                HOLI
            </div>
        </div>
        <div className="flex items-center mt-4 mb-8">
            <div className="border-t border-4 border-white flex-grow"></div>
            <div className="px-3 text-[#ff918c] font-bold text-md">NAVIGATION</div>
            <div className="border-t border-4 border-white flex-grow"></div>
        </div>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none m-8"
        >
            <Image
                alt="WiFi"
                className="z-0 w-full h-full object-cover"
                src={wifi}
            />
            <CardFooter
                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button onClick={() => {
                    window.location.href = "/wifi.png"
                }}
                        className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                        size="sm">
                    Connect
                </Button>
            </CardFooter>
        </Card>

        <Card
            isFooterBlurred
            radius="lg"
            className="border-none m-8"
        >
            <Image
                alt="Menu"
                className="z-0 w-full h-full object-cover"
                src={menu}
            />
            <CardFooter
                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button onClick={() => {
                    window.location.href = "/menu.jpg"
                }} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                        size="sm">
                    View Menu
                </Button>
            </CardFooter>
        </Card>

        <Card
            isFooterBlurred
            radius="lg"
            className="border-none m-8"
        >
            <Image
                alt="Augmented Reality"
                className="z-0 w-full h-full object-cover"
                src={ar}
            />
            <CardFooter
                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                        size="sm"
                        onClick={() => {
                            window.location.href = "/ar.html"
                        }}>
                    AR
                </Button>
            </CardFooter>
        </Card>

        <Card
            isFooterBlurred
            radius="lg"
            className="border-none m-8"
        >
            <Image
                alt="About the Food"
                className="z-0 w-full h-full object-cover"
                src={about}
            />
            <CardFooter
                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button onClick={() => {
                    window.location.href = "/about.pdf"
                }}  className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                        size="sm">
                    About the Food
                </Button>
            </CardFooter>
        </Card>
    </>
}

export default Home