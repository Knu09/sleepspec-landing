const GITHUB_REPO = "Knu09/SleepSpec";

export async function getLatestApkUrl(): Promise<string | undefined> {
    const response = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
    );
    const data = await response.json();

    const apkAsset = data.assets.find((asset: any) =>
        asset.name.endsWith(".apk"),
    );

    return apkAsset?.browser_download_url;
}
