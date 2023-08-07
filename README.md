# Improved GCC Problem Matcher

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Froot-project%2Fgcc-problem-matcher-improved.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Froot-project%2Fgcc-problem-matcher-improved?ref=badge_shield)

Creates annotations for compiler diagnostics (warnings and errors) when building your code.

![image](https://user-images.githubusercontent.com/82065181/225907856-336fa631-6520-44ce-bdf5-cf5780e45e40.png)

## Do you prefer your workflow to fail?

Suppose you don't like compiler warnings.
Use the [Annotation Failure Action](https://github.com/root-project/annotation-failure-action)!
It finds problem annotations created by the *Improved GCC Problem Matcher* and causes the workflow job to fail.
This is way better than `-Werror` ("any warning is treated as a compilation error") because your build can complete and you can still run your test suite and collect potential test failures.

## Inputs

### build-directory

**Optional** Directory the build is running in. Matched errors will not be able to point to the correct file or create warnings in the `Files changed` overview unless this is correct.

## Example usage

Create annotations for builds done in the default directory. Add this anywhere before starting the build.

```yaml
    - uses: root-project/gcc-problem-matcher-improved@v1
    
    - name: Build
      run: |
        ...
```

Create annotations for builds done in directory `/workspace/build/`

```yaml
    - uses: root-project/gcc-problem-matcher-improved@v1
      with:
        build-directory: /workspace/build/
        
    - name: Build
      run: |
         ...
```

## Dev Internals

### Directories

`src/` contains the sources; `dist/` is what people use in production.
To compile `src/` into `dist/` run `npm run build`.

### Prerequisite packages for `npm run build`

Install **`nvm`** through `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash` or similar, as decribed e.g. [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-installing-node-using-the-node-version-manager).
Install **`npm`** by taking a recent version from the output of `nvm list-remote` and installing it through `nvm install v20` or similar.
`npm run build` needs `ncc` which one needs to install through `npm i -g @vercel/ncc`.
