import React from 'react'

const Sidebar = () => {
    return (
        <div id='sidebar' className='hidden md:flex md:flex-shrink-0'>
            <div className="flex flex-col w-64">
                <div className="flex flex-col h-0 flex-1">
                    <a href="/" className="router-link-active router-link-exact-active flex items-center h-16 flex-shrink-0 px-4 bg-gray-900" aria-current="page">
                        <div className="flex items-center">
                            <svg className="h-8" style={{ color: 'rgb(104, 117, 245)' }} fill="none" viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z" />
                                <path fill="currentColor" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z" />
                            </svg>
                            <span className="text-white ml-2.5 font-semibold text-[1.375rem]">Spack</span>
                        </div>
                    </a>
                    <div className="flex-1 flex flex-col overflow-y-auto sidebar-nav">
                        <nav className="bg-gray-800 flex-1 px-2 py-4">
                            <div className="space-y-1">
                                <a href="/" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="text-gray-300 mr-3 flex-shrink-0 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Dashboard
                                </a>
                                <a href="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                    Projects
                                </a>
                                <a href="/tasks" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                    My Tasks
                                </a>
                                <a href="/calendar" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Calendar
                                </a>
                                <a href="/settings/general" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Settings
                                </a>
                            </div>
                            <div className="mt-8">
                                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="favorites-headline">Favorites</h3>
                                <div className="mt-1 space-y-1" role="group" aria-labelledby="favorites-headline">
                                    <a href="/projects/9" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(244, 63, 94)' }} />
                                        <span className="truncate flex-1">Ex distinctio aliquid.</span>
                                    </a>
                                    <a href="/projects/10" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(99, 102, 241)' }} />
                                        <span className="truncate flex-1">Nulla natus.</span>
                                    </a>
                                    <a href="/projects/14" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(20, 184, 166)' }} />
                                        <span className="truncate flex-1">At accusantium.</span>
                                    </a>
                                    <a href="/projects/15" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(236, 72, 153)' }} />
                                        <span className="truncate flex-1">Accusantium vero.</span>
                                    </a>
                                    <a href="/projects/19" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(234, 179, 8)' }} />
                                        <span className="truncate flex-1">Suscipit dolor.</span>
                                    </a>
                                    <a href="/projects/22" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                        <span className="w-2.5 h-2.5 mr-4 rounded-full" aria-hidden="true" style={{ backgroundColor: 'rgb(59, 130, 246)' }} />
                                        <span className="truncate flex-1">DASDSADA</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar