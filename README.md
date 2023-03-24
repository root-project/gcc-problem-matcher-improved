# GCC problem matcher

![FOSSA shield](https://app.fossa.com/api/projects/git%2Bgithub.com%2Folemorud%2Fgcc-problem-matcher.svg?type=shield)

Creates annotations for warnings and errors in gcc builds.

![image](https://user-images.githubusercontent.com/82065181/225907856-336fa631-6520-44ce-bdf5-cf5780e45e40.png)



## Inputs

### build-directory

**Optional** Directory the build is running in. Matched errors will not be able to point to the correct file or create warnings in the `Files changed` overview unless this is correct.

## Example usage

Create annotations for builds done in the default directory. Add this anywhere before starting the build.

```yaml
    - uses: olemorud/gcc-problem-matcher@v1.0
    
    - name: Build
      run: |
        ...
```

Create annotations for builds done in directory `/workspace/build/`

```yaml
    - uses: olemorud/gcc-problem-matcher@master
      with:
        build-directory: /workspace/build/
        
    - name: Build
      run: |
         ...
```
