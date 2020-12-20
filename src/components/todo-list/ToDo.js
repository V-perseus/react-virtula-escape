import React from 'react';
import Faq from "react-faq-component";

const data = {
    title: "TO DO LIST BEFORE YOU PLAY",
    rows: [
        {
            title: "Computer Devices",
            content: "You can use any computing device running Windows 10 or Mac OS.Devices such as laptops and desktops are the only devices that can work appropriately for such games.Devices that you CAN NOT use: - mobile devices - tablets, and - any device that does not have a proper mouse or a keyboard.",
        },
        {
            title: "Computer Browser",
            content:
                "The Team-building Games are streamed online and are compatible with browsers that support specific technologies. Browsers that are compatible with our Team-building Games are: 1- Google Chrome 2- FirefoxWe recommend installing both just if one does not work; you can quickly switch to the other browser and continue your play.",
        },
        {
            title: "Check your internet speed",
            content: "The Virtual Escape games uses high-quality pixel streaming technologies to give you the best and most realistic experience. However, the side effect of that is that you need a high-speed and stable internet connection. You minimum internet speed required is 10 mbps at download.Use this website to test your internet speed as it provide the most accurate results. https://testmy.net/",
        },
        {
            title: "Check your system microphone",
            content: "You require a working microphone to voice-chat with your group. Therefore you must have a working microphone and accessible via the browser.To test that, we recommend you try using this site in advance before joining the game. https://mictestonline.com/OR this https://www.onlinemictest.com/.",
        },
        {
            title: "Check system speakers",
            content: "To hear your team conversation and the actions in the game, you need to have a working speakers or a headset.here is a website where you can check that. https://soundtest.io/",
        },
        {
            title: "Check mouse & keyboard",
            content: "Virtual Escape Games requires a working computer mouse or a trackpad, as well as a functional keyboard.You can still play without a computer mouse, but it is more natural to use a computer mouse. Some users customize their computer mouse in a specific way, making it too sensitive to play these kinds of games. Therefore, we provided you the option to work entirely using the keyboard functions. See the list of the Keyboard keys and associated game functions.W = Move Forward S = Move Backward A= Turn Left D= Turn Right E= Look Up C= Look Down F= Interact with ObjectsAlso, you can use the arrow key as well. Upward Arrow = Move Forward Downward Arrow = Move Backward Left Arrow = Left Sideway Movement Right Arrow = Right Sideway MovementComputer Mouse Movement 360-degree movement, but still need to use the Keyboard to move forward and backward The left mouse button (LMB) is used to interact with objects similar to the F key in the Keyboard.Important Reminder for people using Wireless Mouse and Keyboard: 1- Both are fully charged 2- have spare batteries around if you are using a Keyboard and mouse that operate using batteries.",
        },
        {
            title: "Practice, Practice, Practice",
            content: "The Virtual Escape Games uses specific keyboard keys and computer mouse interactions; therefore, requiring strong motor skills and coordination. We built you a practice game so you can practice these skills before playing the actual game. By doing so, you will be in better shape to keep up with your teammates and enjoy the play, rather than struggling to navigate your way through and keep up with your group.Play the Maze Escape to practice. Remember this not the actual game. this is for Game controls practice only. Remember to have fun too. Maze Escape",
        },
        {
            title: "Text and voice chat",
            content: "Our Virtual Escape Games are text and voice chat enabled. So you can communicate with your group using text chat while inside the game by clicking the Enter key on your Keyboard; which will open the Chat window for you to chat, and when you finish writing, hit the Enter key again so you can go back to the gameplay. This text chat feature is only available when you start the game.The Voice chat works the same way but is enabled by Pressing and Holding the T key on your Keyboard. As soon as you release the hold of the T key, the microphone will stop transmitting any sound.We also enabled you to hear everyone's conversation in your group-game session without needing to press any keyboard keys. Besides, we allowed the voice chat feature even in the lobby areas before entering the game session. This way, your group can voice chat while everyone is gathered and ready to join the game.",
        },
    ],
};
 
const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "black",
};
 
const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

function ToDo() {
    return (
        <div>
            <Faq data={data} styles={styles} config={config} />
        </div>
    )
}

export default ToDo;
