# How to make the website more secure.
    Use React or another framework to handle security
    Browsers use same origin policy

    Compartmentalize applications to make it harder to hack
    Trusted Types into my development, API from Google which addresses XSS issues.
    Use auto escaping templating libraries instead. Use a nonce based Content Security Policy
        Content-Security-Policy:
        object-src 'none';
        script-src 'nonce-{random}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;
        base-uri 'none';
        report-uri https://your-report-collector.example.com/