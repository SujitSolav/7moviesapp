import React from 'react';

function About() {

    

    const mainStyle = {
        padding: '20px'
    };

    const sectionStyle = {
        marginBottom: '30px'
    };

    const teamListStyle = {
        listStyleType: 'disc',
        marginLeft: '20px'
    };

    return (
        <>
            
                <h1>About Us</h1>
            
            <main style={mainStyle}>
                <section style={sectionStyle}>
                    <h2>Our Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit odio eget ipsum hendrerit tristique.</p>
                    <p>Integer vehicula odio sed ultricies eleifend. Vestibulum sit amet urna a felis suscipit bibendum vel a justo.</p>
                </section>
                <section style={sectionStyle}>
                    <h2>Our Team</h2>
                    <p>Meet our amazing team of professionals who work tirelessly to deliver exceptional results:</p>
                    <ul style={teamListStyle}>
                        <li>John Doe - CEO</li>
                        <li>Jane Smith - COO</li>
                        <li>Michael Johnson - CTO</li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default About;
