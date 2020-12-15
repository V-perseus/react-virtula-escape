import React from 'react';
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is a Virtual Escape Room?",
            content: "A virtual escape multi-players game designed for a team-building simulation to improve team-work, communication, collaboration, problem solving and my other team relevant skills.It is ideal for virtual teams.",
        },
        {
            title: "What is the rate of completing the game?",
            content:
                "The game is designed to complete between 60-90 depending on the team performance.Novice player and team members that new to each others will likely not complete game on-time first time.In addition, there are multi-stages to each game, so each stage increase the difficulty level and enable team efficiency at total different level.Each stage is played as a separate session.",
        },
        {
            title: "How long does the whole experience take?",
            content: "Depending on the game, the number of players, and the team stage you choose to play. Typical timeline for a game is between 50 to 90 minutes.For Example: LABESCAPE with Novice Players will take around 90 minutes to complete. We had teams complete the game in 40 minutes, but these teams are advanced teams, and also played the game before, and this was their tune-up session.",
        },
        {
            title: "Can I play more than one game?",
            content: "In fact we recommend that you and your team continue to play at least once every quarter. These are called team-tune up sessions.",
        },
        {
            title: "Will other people be in the room with us?",
            content: "No. These virtual rooms are private to your team, and only visible to people who are invited to play in this session.",
        },
        {
            title: "What equipment do I need to play?",
            content: "This is a computer game played online. Therefore you need to the following equipment.1- A desktop or a laptop computer. 2- A decent Internet connection (at least 10 mbps download speed). 3- A web browser (chrome or Firefox) 4- A keyboard (Note: wireless Keyboard need to be fully charges or have enough battery power). 5- A computer mouse (Note: wireless mouse need to be fully charges or have enough battery power). 6- A working headset with a microphone so you can talk and hear your team speaking (Note: Headset need to be fully charges or have enough battery power)",
        },
        {
            title: "Is there an age limit?",
            content: "It does not really matter as long as you have the right equipment and able to operate these equipment effectively, then you can play. We have team members plays as young as 8 years old, and we have team members as old as 60 years old.In fact, it is fun to see how different age groups plays differently.We have many family members with a mixed ages who played for the sake of bridging the family together and do something fun during the pandemic lockdown, and it was reported that it was very entertaining and exciting.",
        },
    ],
};
 
const styles = {
    bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentColor: 'grey',
    arrowColor: "red",
};
 
const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

function FaqMain() {
    return (
        <div>
            <Faq data={data} styles={styles} config={config} />
        </div>
    )
}

export default FaqMain
