'use client'

import { useEffect } from 'react';

const IFrame = () => {
    const vercelDomain = 'https://nextjs-boilerplate-six-xi-25.vercel.app'
    useEffect(() => {
        window.addEventListener("message", function(event) {
            // Verify that the message is coming from the expected domain
            if (event.origin === vercelDomain) {
                console.log("From Netlify :: Message from parent:", event.data);
                // Send a response back to the parent
                event.source.postMessage("Hello from netlify!", event.origin);
            } else {
                console.error("Received message from untrusted origin:", event.origin);
            }
        });

        // Example to simulate receiving a message from the parent
        window.addEventListener("load", function() {
            setTimeout(() => {
                window.parent.postMessage("Iframe is ready!", vercelDomain);
            }, 1000);
        });
    }, [])

    return <></>
}

export { IFrame };