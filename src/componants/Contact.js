import React from 'react';

function Contact() {
    return (
        <main style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
            <section style={{ width: '45%' }}>
                <h2>Contact Us</h2>
                <p style={{ marginBottom: '20px' }}>If you have any questions or inquiries, please feel free to contact us using the information below:</p>
                <ul style={{ listStyle: 'none' }}>
                    <li style={{ marginBottom: '10px' }}>Email: example@example.com</li>
                    <li style={{ marginBottom: '10px' }}>Phone: +1 123-456-7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </section>
            <section style={{ width: '45%' }}>
                <h2>Send Us a Message</h2>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="name" style={{ marginBottom: '5px' }}>Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ marginBottom: '5px' }}>Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="message" style={{ marginBottom: '5px' }}>Message:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;