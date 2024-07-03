import React from "react"; // Import the React library to use React components and features

// Define and export the Authentication component
export default function Authentication() {

    return (
        <div>
            <div className="flex flex-column">
                <div className="flex w-2/4 h-screen justify-center items-center flex-col">
                    <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl">
                        NFC Authentification
                    </h1>
                    <form className="w-7/12 flex flex-col">
                        <input
                            className="my-2 px-3 py-2"
                            name="codepin"
                            type="password"
                            placeholder="CODE PIN"
                        />
                        <div className="my-4 w-full flex justify-center">
                            <input
                                className="w-8/12 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                type="submit"
                                value="login"
                            />
                        </div>
                    </form>
                </div>
                <div className="flex w-2/4 h-screen">
                    <img
                        className="object-cover object-center w-full"
                        src="montagne.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
}



