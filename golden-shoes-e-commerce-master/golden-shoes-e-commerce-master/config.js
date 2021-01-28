{
    disabled: false,
    module: "MMM-OneTracker",
    position: "bottom_right",
    config: {
        username: '', // Sign up for free using the OneTracker App
        password: '',
        useHeader: true, // false if you don't want a header
        header: 'My Packages', // Change in config file. useHeader must be true
        maxWidth: '300px',
        animationSpeed: 3000, // fade speed
        initialLoadDelay: 3250,
        retryDelay: 2500,
        updateInterval: 10 * 60 * 1000, // 10 minutes
        apiLanguage: 'en',
        maxParcels: 5,
    }
},