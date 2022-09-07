import React from 'react'

const Main = () => {
    return (
        <div id='main' className='flex-1 relative overflow-y-auto px-8 py-6'>
            <div>
                <h1 className="text-2xl font-semibold text-gray-900" data-cy="page-title">Dashboard</h1>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Open Tasks</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">113</p>
                        </dd>
                    </div>
                    <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Projects In Progress</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">23</p>
                        </dd>
                    </div>
                    <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Completed Tasks</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">106</p>
                        </dd>
                    </div>
                    <div className="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden">
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Projects</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">24</p>
                        </dd>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 sm:gap-8 mt-4 sm:mt-8">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="bg-white shadow rounded-lg pl-4 pr-3 py-4">
                            <h3 className="mb-4 font-medium">Completed in the last 7 days</h3>
                            <div style={{ height: 300 }}>
                                <canvas id="tasks-chart" style={{ display: 'block', boxSizing: 'border-box', height: 300, width: 756 }} width={756} height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="bg-white shadow rounded-lg pl-4 pr-3 py-4">
                            <h3 className="mb-4 font-medium">Most productive month</h3>
                            <div style={{ height: 300 }}>
                                <canvas id="tasks-chart-yearly" style={{ display: 'block', boxSizing: 'border-box', height: 300, width: 756 }} width={756} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <Test />
            </div>
        </div>
    )
}

export default Main