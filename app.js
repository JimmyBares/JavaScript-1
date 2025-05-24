/** 
 * 2. Accept a paramenter called 'subscriptionsStatus'
 * 3. Return a new Promis inside of the function that:
 *  - if "VIP" resolve("show video")
 * - ir ""FREE" resolve("show trailer")
 *  - otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 */


function getVideo (subscriptionStatus) {
return new Promise((resolve, reject) => {
if (subscriptionStatus === "VIP") {
        resolve("show video");
    }

 else if (subscriptionStatus === "FREE") {
    resolve("show Trailer")
}
else {
    reject("no video")
}
})
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    console.log(await getVideo(status))
}

main();