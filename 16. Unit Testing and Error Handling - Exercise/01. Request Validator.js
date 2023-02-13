function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
 
    if (!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    
    if (!(obj.hasOwnProperty('uri')) || obj.uri === '' || !(/^[a-zA-Z0-9.*]+$/g.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }
 
    if (!validVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
 
    if (!(obj.hasOwnProperty('message')) || !(obj.message === '' || /^[^<>\\&'"]*$/g.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }
 
    return obj;
}