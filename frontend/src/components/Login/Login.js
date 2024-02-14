import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "flowbite";

const Login = () => {
    return (
        <React.Fragment>
        <div className="w-screen h-screen flex justify-center items-center bg-[#004c94]">
            <div className="bg-white p-12 rounded-3xl ">
                <h6 className="text-2xl text-center font-semibold">Login to your account</h6>
                <form className="flex flex-col gap-6 pt-8">
                    <div>
                        <label htmlFor="email" className="font-semibold text-base">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-96 border-2 border-gray-300 p-2 block rounded-md mt-1 tracking-wide text-base"
                            autoComplete="off"
                        />
                    </div>
                    <div className="pb-0">
                        <label htmlFor="password" className="font-semibold text-base">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-96 border-2 border-gray-300 p-2 block rounded-md mt-1 tracking-wide text-base"
                            autoComplete="off"
                        />
                    </div>
                    <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                    <button className="bg-[#004f97] p-4 w-full text-white text-xl rounded-md" type="submit">
                       Login
                    </button>
                    <p className="text-center font-medium pt-4"> New to MyApp? <Link to="/register" className="text-blue-800">Sign Up</Link></p>
                </form>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Login;