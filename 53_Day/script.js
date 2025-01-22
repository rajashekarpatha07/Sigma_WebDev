const { Worker } = require("worker_threads");

function startWorkerThreads(usagePercentage, numThreads) {
    const interval = 1000; // 1 second interval
    const workTime = (usagePercentage / 100) * interval;
    const restTime = interval - workTime;

    for (let i = 0; i < numThreads; i++) {
        const worker = new Worker(`
            const { parentPort } = require("worker_threads");

            function busyLoop(duration) {
                const end = Date.now() + duration;
                while (Date.now() < end) {
                    // Busy loop to simulate CPU load
                }
            }

            function controlCPU(workTime, restTime) {
                setInterval(() => {
                    busyLoop(workTime); // Work
                }, workTime + restTime);
            }

            // Listen for configuration from the main thread
            parentPort.on("message", ({ workTime, restTime }) => {
                controlCPU(workTime, restTime);
            });
        `, { eval: true });

        // Pass the work and rest times to the worker thread
        worker.postMessage({ workTime, restTime });

        worker.on("error", (err) => console.error("Worker Error:", err));
        worker.on("exit", (code) => {
            if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
        });
    }
}

// Start workers to simulate CPU usage
const numCores = require("os").cpus().length; // Detect the number of CPU cores
startWorkerThreads(70, numCores); // 70% CPU usage across all cores
